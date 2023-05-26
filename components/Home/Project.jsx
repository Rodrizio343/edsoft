import Image from 'next/image'
import Link from 'next/link'

const Project = ({
  name,
  detail,
  image
}) => {
  return (
    <Link href="#" className="project-item">
      <article>
        <div>
          <h4>{name}</h4>
          <p>{detail}</p>
        </div>
        <div className="image-container">
          <Image
            src={image}
            alt={name}
            width={276}
            height={165}
          />
        </div>
      </article>
    </Link>
  )
}

export default Project