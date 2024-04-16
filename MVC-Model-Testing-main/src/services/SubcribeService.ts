import { ISubcribeService } from "./interfaces/ISubcribeService";
import { ISubcribeRepository } from "../repositories/interfaces/ISubcribeRepository";

export class SubcribeService implements ISubcribeService {
  constructor(private subcribeRepository: ISubcribeRepository) {}

  async getSubcribe(req: any, res: any) {
    const subcribe = await this.subcribeRepository.GetAllSubcribe(req, res);
    return subcribe;
  }

  async addSubcribe(req: any, res: any) {
    const newSubcribe = await this.subcribeRepository.PostSubcribe(req, res);
    return newSubcribe;
  }
}
