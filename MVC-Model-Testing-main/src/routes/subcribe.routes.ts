import SubcribeController from "../controller/SubcribeController";
import { SubcribeRepository } from "../repositories/SubcribeRepository";
import { SubcribeService } from "../services/SubcribeService";

const subcribeController = new SubcribeController(
  new SubcribeService(new SubcribeRepository())
);

module.exports = function (app: any) {
  app.get("/api/subcribe", subcribeController.GetAllSubcribe);

  app.post("/api/addsubcribe", subcribeController.AddNewSSubcribe);
};
