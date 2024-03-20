import { NextResponse } from "next/server";
import { ConnectDB } from "../lib/config/db";
import ToDoModel from "../lib/models/ToDoModel";

const LoadDB = async ()=> {
  await ConnectDB();
}
LoadDB();

export async function GET(request){
  const todos = await ToDoModel.find({});
  return NextResponse.json({todos:todos})
}
// post method
export async function POST(request){
  const {title,description} = await request.json();
  await ToDoModel.create({
    title,
    description
  })
  return NextResponse.json({msg:"Todo Created"})
}