export default function handler(req, res) {
  res.status(200).json(
    [
      {
        "id": 1,
        "name": "Project 1",
        "detail": "Detail project 1",
        "image": "/images/project-1.jpg"
      },
      {
        "id": 2,
        "name": "Project 2",
        "detail": "Detail project 2",
        "image": "/images/project-2.jpg"
      },
      {
        "id": 3,
        "name": "Project 3",
        "detail": "Detail project 3",
        "image": "/images/project-3.jpg"
      }
    ]
  )
}