import Image from 'next/image'
import Link from 'next/link'

const Logo = () => {
  return (
    <Link href="/">
      <Image
        src="/images/logo.svg"
        alt="Logo EDsoft"
        width={136}
        height={32}
      />
    </Link>
  )
}

export default Logo