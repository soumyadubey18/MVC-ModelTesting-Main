import { Model } from "objection";

export class Subcribe extends Model {
  static get tableName() {
    return "subcribe";
  }

  id!: string;
  email!: string;

  createdAt!: string;
  updatedAt!: string;

  $beforeInsert() {
    this.createdAt = new Date().toISOString();
    this.updatedAt = new Date().toISOString();
  }

  $beforeUpdate() {
    this.updatedAt = new Date().toISOString();
  }
}
