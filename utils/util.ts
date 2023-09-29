import { Response } from 'express';

export function sendResponse(res: Response, data: any) {
  res.json({ success: true, data: data });
}
