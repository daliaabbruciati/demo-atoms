import Navbar from '@/components/Navbar'
import Header from '@/components/Header'
import Searchbar from '@/components/Searchbar'
import Article from '@/components/Article'
import heroImage from '@/assets/HeroImage.jpeg'
import authorImage from '@/assets/AuthorImage.jpeg'

export default function Home() {
  return (
    <main className="flex w-full flex-col items-center justify-between">
      <Header />
      <Searchbar />
      <Navbar />
      <Article
        author="Alessandro Puglia"
        avatar={authorImage}
        cover={heroImage}
        date="22 giugno 2022"
        tag="Migranti"
        title="Roccella Jonica, la Lampedusa che l'Italia ignora"
      />
    </main>
  )
}
