import { Router } from "express";

import { specificationController } from "../modules/cars/useCases/createSpecification";

const specificationsRoutes = Router();

specificationsRoutes.post("/", (request, response) => {
  return specificationController.handle(request, response);
});

export { specificationsRoutes };
