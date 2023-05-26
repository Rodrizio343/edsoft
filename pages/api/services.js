export default function handler(req, res) {
  res.status(200).json(
    [
      {
        "id": 1,
        "name": "Service 1",
        "detail": "Detail service 1"
      },
      {
        "id": 2,
        "name": "Service 2",
        "detail": "Detail service 2"
      },
      {
        "id": 3,
        "name": "Service 3",
        "detail": "Detail service 3"
      }
    ]
  )
}