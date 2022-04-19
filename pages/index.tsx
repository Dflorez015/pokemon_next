import { Button } from '@nextui-org/react'
import type { NextPage } from 'next'
import { HeadLayout } from '../components/layouts'

const Home: NextPage = () => {
  return (
    <HeadLayout headTitle="Listado de pokemones">
      <Button color="gradient">Halloww</Button>
    </HeadLayout>
  )
}

export default Home
