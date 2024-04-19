import { Header } from "../../components/common/Header";
import { Grid } from "../../components/layout/Grid";
import styles from "./Pets.module.css"
import { Card } from "../../components/common/Card";
import { Skeleton } from "../../components/common/Skeleton";
import { Pagination } from "../../components/common/Pagination";
import { useSearchParams } from "react-router-dom";
import { usePetList } from "../../hooks/usePetList";
import { Select } from "../../components/common/Select";
import { Button } from "../../components/common/Button";


export function Pets() {
    
  const[searchParams, setSearchParams] = useSearchParams()

  const urlParams = {
    page: searchParams.get('page') ? Number(searchParams.get('page')) : 1,
  }

  const {data, isLoading} = usePetList(urlParams)


  function changePage (page: number) {
    setSearchParams((params) => {
      params.set('page', String(page))
      return params
    })
  }

  return (
   <Grid>
     <div className={styles.container}>
     <Header />

    <form className={styles.filters}>
      <div className={styles.coluns}>
        <div className={styles.colum}>
          <Select label = 'Espécie' options={[
            {value:'',text: 'Todos'},
            {value:'cachorro', text: 'Cachorros'},
            {value:'gato', text: 'Gato'},
          ]}
          />
        </div>
      </div>
      <Button type="submit">Buscar</Button>
    </form>
     {
      isLoading && <Skeleton containerClassName={styles.skeleton} count={10}/>
     }
     <main className={styles.list}>
      {data?.items.map((pet) => (
        <Card
            key={pet.id}
            href={`/pet/${pet.id}`}
            text={pet.name}
            thumb={pet.photo}
          />
        ))}
      
      
      </main>
      {data?.currentPage && 
       <Pagination 
        currentPage={data.currentPage}
        totalPages={data.totalPages} 
        onPageChange={(number) => changePage(number)}/>}

     </div>
    </Grid>  

  )
  
}