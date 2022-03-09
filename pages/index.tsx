import type { NextPage } from 'next'
import Grid from '../components/Grid'
import GridChild from '../components/Grid/gridchild'

const Home: NextPage = () => {
  return (
    <>
      <div className="btn"></div>
      <Grid className="gridContainer grid-col-5 grid-row-5">
        <GridChild className="row-start-1 col-start-1">Hej1</GridChild>
        <GridChild className="row-start-2 col-start-2">Hej2</GridChild>
        <GridChild className="row-start-3 col-start-3">Hej3</GridChild>
        <GridChild className="row-start-4 col-start-4">Hej4</GridChild>
        <GridChild className="row-start-5 col-start-5">Hej5</GridChild>

        <GridChild className="row-start-1 col-start-5">Hej1</GridChild>
        <GridChild className="row-start-2 col-start-4">Hej2</GridChild>
        <GridChild className="row-start-3 col-start-3">Hej3</GridChild>
        <GridChild className="row-start-4 col-start-2">Hej4</GridChild>
        <GridChild className="row-start-5 col-start-1">Hej5</GridChild>
      </Grid>
    </>
  )
}

export default Home
