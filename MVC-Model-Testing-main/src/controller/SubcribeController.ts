import { ISubcribeService } from "../services/interfaces/ISubcribeService";
const { success, error } = require("../responceApi");

export default class SubcribeController {
  constructor(private subcribe: ISubcribeService) {}

  GetAllSubcribe = async (req: any, res: any) => {
    const subcribe = await this.subcribe.getSubcribe(req, res);
    if (!subcribe) {
      res
        .status(404)
        .json(error("Subcribe could not be fetched.", res.statusCode));
    }
    res.status(200).json(success("Good to go", subcribe, res.statusCode));
  };

  AddNewSSubcribe = async (req: any, res: any) => {
    const newSubcribe = await this.subcribe.addSubcribe(req, res);
    if (!newSubcribe) {
      res
        .status(404)
        .json(error("Subcribe could not be added.", res.statusCode));
    }
    res
      .status(200)
      .json(
        success(
          "Good to go subcribe is added successfully",
          newSubcribe,
          res.statusCode
        )
      );
  };
}
