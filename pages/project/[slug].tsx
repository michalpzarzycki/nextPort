import { useRouter } from 'next/router'
import { useEffect } from 'react';

const Post = () => {
  const router = useRouter()
  const { slug } = router.query

//   useEffect(() => {
//       console.log(router.query)
//   }, [router])
  return <p>Post: {slug}</p>
}

export default Post