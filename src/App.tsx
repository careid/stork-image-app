import './App.css'

function App() {
  return (
    <div className="app">
      <img 
        src="https://images.unsplash.com/photo-1592697629827-7cd96652ac67?auto=format&fit=crop&w=600"
        alt="White stork standing"
        style={{
          maxWidth: '100%',
          height: 'auto',
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
        }}
      />
      <p style={{ marginTop: '1rem', color: '#666' }}>
        A majestic stork in its natural habitat
      </p>
    </div>
  )
}

export default App