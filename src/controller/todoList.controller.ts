import { db } from "../config/firebase";
import { appError } from "../utils/appError";
import { catchAsync } from "../utils/catchAsync";
import response from "../utils/response";

export class todoListController {
  // create document and return data
  private static COLLECTION = "todoList";
  static createList = catchAsync(async (req, res, _next) => {
    const docRef = await db.collection(this.COLLECTION).add(req.body);
    const docSnap = await docRef.get();
    response(res, { id: docSnap.id, ...docSnap.data() }, 201);
  });
  // To get all documents for collection
  static getAllList = catchAsync(async (req, res, _next) => {
    const snapshot = await db.collection(this.COLLECTION).get();
    const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    response(res, data);
  });
  //  get specific document
  static getTodoDetails = catchAsync(async (req, res, next) => {
    const docSnap = await db
      .collection(this.COLLECTION)
      .doc(req.params.id)
      .get();
    if (!docSnap.exists)
      return next(new appError("document not found ", 404, "NOT_FOUND"));
    response(res, { id: docSnap.id, ...docSnap.data() });
  });
  // update todo list
  static updateList = catchAsync(async (req, res, _next) => {
    const docRef = db.collection(this.COLLECTION).doc(req.params.id)
    await docRef.update(req.body);
    const updateOne = await docRef.get();
    response(res, {id: updateOne.id, ...updateOne.data()});
  });
  // delete document
  static deleteList = catchAsync(async (req, res, _next) => {
    await db.collection(this.COLLECTION).doc(req.params.id).delete();
    response(res, null);
  });
}
