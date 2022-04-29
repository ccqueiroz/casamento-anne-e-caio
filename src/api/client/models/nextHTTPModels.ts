import { Files } from "formidable";
import { NextApiRequest, NextApiResponse } from "next";

export interface NextApiRequestModels extends NextApiRequest {
    files: Files
}

export interface NextApiResponseModels extends NextApiResponse { }