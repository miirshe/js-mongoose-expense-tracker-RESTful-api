export function sendSuccessResponse(res, data) {
  return res.status(201).json({ data });
}

export function sendErrorResponse(res, data) {
  return res.status(500).json({ data });
}
