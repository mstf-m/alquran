import Breadcrumb from '@/components/UI/Breadcrumb'
import Footer from '@/components/UI/Footer'
import HeaderSecondary from '@/components/UI/HeaderSecondary'

export default function Layout({children}) {


  return (
    <div>
      <HeaderSecondary />
      <Breadcrumb />

      {children}
 

      <Footer />
    </div>
  )
}
