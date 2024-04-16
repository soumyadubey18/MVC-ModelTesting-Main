import { ISubcribeRepository } from "./interfaces/ISubcribeRepository";
import { Subcribe } from "../models/Subcribe";

export class SubcribeRepository implements ISubcribeRepository {
  async PostSubcribe(req: any, res: any) {
    const subcribe = req.body;
    const newSubcribe = await Subcribe.query()
      .insert({
        email: subcribe.email,
      })
      .returning("*");
    return newSubcribe;
  }

  async GetAllSubcribe(req: any, res: any) {
    const subcribe = await Subcribe.query().select().orderBy("created_at");
    return subcribe;
  }
}