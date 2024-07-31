import Navbar from '@/components/Navbar'
import Header from '@/components/Header'
import Searchbar from '@/components/Searchbar'

export default function Home() {
  return (
    <main className="flex w-full flex-col items-center justify-between">
      <Header />
      <Searchbar />
      <Navbar />
    </main>
  )
}
