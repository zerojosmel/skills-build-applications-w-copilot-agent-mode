import { NavLink, Route, Routes } from 'react-router-dom'
import Activities from './components/Activities.jsx'
import Leaderboard from './components/Leaderboard.jsx'
import Teams from './components/Teams.jsx'
import Users from './components/Users.jsx'
import Workouts from './components/Workouts.jsx'
import './App.css'

const views = [
  ['/', 'Overview', '01'],
  ['/activities', 'Activities', '02'],
  ['/leaderboard', 'Leaderboard', '03'],
  ['/teams', 'Teams', '04'],
  ['/users', 'Members', '05'],
  ['/workouts', 'Workouts', '06'],
]

function Overview() {
  return <div className="overview-grid"><section className="welcome-panel"><span className="eyebrow">Saturday, 22 August</span><h2>Make today count.</h2><p>Small, consistent actions become your strongest routine.</p><NavLink className="primary-action" to="/workouts">View my workouts <span>-&gt;</span></NavLink></section><section className="quote-panel"><span className="eyebrow">Today's signal</span><strong>"Progress is a practice."</strong><p>Keep your momentum visible.</p></section></div>
}

function Page({ title, kicker, children }) {
  return <><header className="page-heading"><span className="eyebrow">{kicker}</span><h2>{title}</h2></header>{children}</>
}

function App() {
  return <div className="app-shell">
    <aside className="sidebar"><div className="brand-mark"><span>O</span><div>OCTOFIT<small>TRACKER</small></div></div><nav>{views.map(([path, label, number]) => <NavLink key={path} to={path} end={path === '/'}><span>{number}</span>{label}</NavLink>)}</nav><div className="sidebar-note"><span className="status-dot" />API connected<br /><small>Keep showing up.</small></div></aside>
    <main className="main-content"><div className="mobile-brand">OCTOFIT <span>/ TRACKER</span></div><Routes><Route path="/" element={<><Page title="Your training space" kicker="Good morning, Maya" /><Overview /></>} /><Route path="/activities" element={<Page title="Recent movement" kicker="Your log"><Activities /></Page>} /><Route path="/leaderboard" element={<Page title="Friendly competition" kicker="This week"><Leaderboard /></Page>} /><Route path="/teams" element={<Page title="Find your people" kicker="Your circles"><Teams /></Page>} /><Route path="/users" element={<Page title="The community" kicker="OctoFit members"><Users /></Page>} /><Route path="/workouts" element={<Page title="Built for your next step" kicker="Your plan"><Workouts /></Page>} /></Routes></main>
  </div>
}

export default App
