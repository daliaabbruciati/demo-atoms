import Navbar from '@/components/Navbar'
import Searchbar from '@/components/Searchbar'

export default function Home() {
  return (
    <main className="flex w-full flex-col items-center justify-between">
      <Navbar />
      <Searchbar />
    </main>
  )
}
