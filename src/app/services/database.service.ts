import { Injectable, signal, WritableSignal } from '@angular/core';
import { SQLiteDBConnection } from '@capacitor-community/sqlite';
import { CapacitorSQLite, SQLiteConnection } from '@capacitor-community/sqlite';

const DB_Mess = 'message';
export interface Mess {
  id: number;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  private sqlite: SQLiteConnection = new SQLiteConnection(CapacitorSQLite);
  public db!: SQLiteDBConnection;
  private messages: WritableSignal<Mess[]> = signal<Mess[]>([])

  constructor() { }

  async initializePlugin() {
    try {
      this.db = await this.sqlite.createConnection(
        DB_Mess,
        false,
        'no-encryption',
        1,
        false
      );

      await this.db.open();

      const schema = `CREATE TABLE IF NOT EXISTS messages(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        message TEXT NOT NULL
      );`;
      await this.db.execute(schema);
      await this.loadMessages();
      return true;
    } catch (error) {
      console.error("Error initializing plugin:", error);
      return false;
    }
  }

  getMessages() {
    return this.messages;
  }

  async loadMessages() {
    const messages = await this.db.query('SELECT * FROM messages');
    this.messages.set(messages.values || []);
  }

  async addMessage(message: string) {
    const query = `INSERT INTO messages (message) VALUES (?)`;
    const result = await this.db.run(query, [message]);
    await this.loadMessages();
    return result;
  }

  async deleteMessageById(id: number) {
    const query = `DELETE FROM messages WHERE id=?`;
    const result = await this.db.run(query, [id]);
    await this.loadMessages();
    return result;
  }
}
