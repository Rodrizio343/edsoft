import Image from 'next/image'

const Project = ({project}) => {
  return (
    <article key={project.id }className="card-project">
      <div className="image-container">
        <Image
          src={project.image}
          alt={project.name}
          width={276}
          height={165}
          placeholder='blur'
          blurDataURL={project.image}
        />
      </div>
      <div>
        <h3>{project.name}</h3>
        <p>{project.detail}</p>
        <a href={project.url} target="_blank">Ver proyecto</a>
      </div>
    </article>
  )
}

export default Project