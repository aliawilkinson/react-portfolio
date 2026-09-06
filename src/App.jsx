import { lazy, Suspense } from 'react'
import { Analytics } from '@vercel/analytics/react'
import Home from './components/Home/Home'
import css from './styles/app.module.scss'
import { Routes, Route, Navigate, useParams, useLocation } from 'react-router-dom'
import InfoPost from './components/InfoPost/InfoPost'
import OtherProjectsList from './components/OtherProjects/OtherProjectsList'
import OtherProjectDetail from './components/OtherProjects/OtherProjectDetail'
import BlogList from './components/Blog/BlogList'
import BlogPost from './components/Blog/BlogPost'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import RouteScroller from './components/RouteScroller/RouteScroller'
import { MusicPlayerProvider } from './context/MusicPlayerContext'
import SoundCloudPlayer from './components/MusicPlayer/SoundCloudPlayer'

const Tarot = lazy(() => import('./components/Tarot/Tarot'))

const LegacyProjectRedirect = () => {
  const { slug } = useParams()
  return <Navigate to={`/projects/${slug}`} replace />
}

const App = () => {
  const { pathname } = useLocation()
  const isTarot = pathname === '/tarot' || pathname.startsWith('/tarot/')
  const isProjectWorld = isTarot
    || /^\/projects\/[^/]+$/.test(pathname)

  return (
    <MusicPlayerProvider>
      <div className={`bg-primary ${css.container}`}>
        <Analytics />
        {!isProjectWorld && <Header />}
        <RouteScroller />
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/hero' element={<Home />} />
        <Route path='/expertise' element={<Home />} />
        <Route path='/case-studies' element={<Home />} />
        <Route path='/projects' element={<OtherProjectsList />} />
        <Route path='/projects/:slug' element={<OtherProjectDetail />} />
        <Route path='/other-projects' element={<Navigate to="/projects" replace />} />
        <Route path='/other-projects/:slug' element={<LegacyProjectRedirect />} />
        <Route path='/blog' element={<BlogList />} />
        <Route path='/blog/:slug' element={<BlogPost />} />
        <Route path='/tarot' element={<Suspense fallback={<div style={{ minHeight: '60vh' }} />}><Tarot /></Suspense>} />
        <Route path='/tarot/conversation' element={<Navigate to="/tarot" replace />} />
        <Route path='/conversation' element={<Navigate to="/tarot" replace />} />
        <Route path='/testimonials' element={<Home />} />
        <Route path='/experience' element={<Home />} />
        <Route path='/contact' element={<Home />} />
        <Route path='/about' element={<InfoPost post='about' />} />
        <Route path='/releaseofreleases' element={<InfoPost post='releaseofreleases' />} />
        <Route path='/iacPipelineValidation' element={<InfoPost post='iacPipelineValidation' />} />
        <Route path='/amplifyReactMigApp' element={<InfoPost post='amplifyReactMigApp' />} />
        <Route path='/cmdletCreationTemplate' element={<InfoPost post='cmdletCreationTemplate' />} />
        <Route path='/agenticWorkflowApp' element={<InfoPost post='agenticWorkflowApp' />} />
        <Route path='/solarBloomCommerce' element={<InfoPost post='solarBloomCommerce' />} />
        <Route path='/cognitoIdentityArchitecture' element={<InfoPost post='cognitoIdentityArchitecture' />} />
        <Route path='/almModernization' element={<InfoPost post='almModernization' />} />
      </Routes>
      {!isProjectWorld && <SoundCloudPlayer isOnMusicPage={false} />}
      {!isProjectWorld && <Footer />}
    </div>
    </MusicPlayerProvider>
  );
};

export default App;
