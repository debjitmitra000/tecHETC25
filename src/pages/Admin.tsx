import { useState, useEffect } from 'react';

// Types
interface Entry {
  _id: string;
  name: string;
  phone: string;
  email: string;
  department: string;
  year: string;
  events: string[];
  createdAt: string;
  updatedAt: string;
  __v: number;
}

interface ApiResponse {
  msg: string;
  entries: Entry[];
}

const TetrisBlock = ({ color }: { color: string }) => {
  return (
    <div className={`w-6 h-6 border border-gray-800 ${color} shadow-inner shadow-white/10`} />
  );
};

const TetrisBorder = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative border-4 border-gray-700 bg-gray-900 rounded-sm p-4 shadow-lg">
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-500"></div>
      <div className="mt-2">{children}</div>
    </div>
  );
};

const LoginScreen = ({ onLogin }: { onLogin: () => void }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (username === 'admin' && password === 'admin') {
      onLogin();
    } else {
      setError('Invalid credentials');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleLogin();
  };

  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="mb-8 flex flex-col items-center">
          <div className="flex mb-4">
            <TetrisBlock color="bg-red-500" />
            <TetrisBlock color="bg-red-500" />
            <TetrisBlock color="bg-red-500" />
            <TetrisBlock color="bg-red-500" />
          </div>
          <h1 className="text-4xl font-bold text-teal-400 tracking-widest mb-2">Welcome!</h1>
          <h2 className="text-2xl font-bold text-blue-400 mb-4">TECHetc core members</h2>
        </div>
        
        <TetrisBorder>
          <div className="space-y-6" onSubmit={handleSubmit}>
            {error && <div className="text-red-500 font-mono text-center bg-gray-800 p-2">{error}</div>}
            
            <div>
              <label className="block text-teal-400 font-mono mb-2" htmlFor="username">Username</label>
              <input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 text-white font-mono focus:border-teal-400 focus:outline-none"
              />
            </div>
            
            <div>
              <label className="block text-teal-400 font-mono mb-2" htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                value={password}
                onKeyDown={(e) => e.key === 'Enter' && handleLogin()}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 text-white font-mono focus:border-teal-400 focus:outline-none"
              />
            </div>
            
            <button
              onClick={handleLogin}
              className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-mono tracking-widest border-b-4 border-blue-800 active:border-b-0 active:border-t-4 active:bg-blue-800 transition-all"
            >
              LOGIN
            </button>
          </div>
        </TetrisBorder>
      </div>
    </div>
  );
};

const Dashboard = () => {
  const [entries, setEntries] = useState<Entry[]>([]);
  const [filteredEntries, setFilteredEntries] = useState<Entry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [selectedEntry, setSelectedEntry] = useState<Entry | null>(null);
  
  // Search and filter states
  const [searchTerm, setSearchTerm] = useState('');
  const [departmentFilter, setDepartmentFilter] = useState('');
  const [yearFilter, setYearFilter] = useState('');
  
  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:3000/entries');
      const data: ApiResponse = await response.json();
      if (data.msg === 'success') {
        setEntries(data.entries);
        setFilteredEntries(data.entries);
      } else {
        setError('Failed to fetch data');
      }
    } catch (err) {
      setError('Error fetching data: ' + (err instanceof Error ? err.message : String(err)));
      // Fallback to mock data for development/demo
      const mockData: ApiResponse = {
        "msg": "success",
        "entries": [
          {
            "_id": "681136d9b450c3dda599033d",
            "name": "Soham De",
            "phone": "09330033995",
            "email": "sohamde2004@gmail.com",
            "department": "cse",
            "year": "3",
            "events": [
              "hackathon",
              "code-sprint",
              "robo-wars",
              "cad-contest"
            ],
            "createdAt": "2025-04-29T20:30:17.542Z",
            "updatedAt": "2025-04-29T20:30:17.542Z",
            "__v": 0
          },
          {
            "_id": "681136d9b450c3dda599033e",
            "name": "Alex Johnson",
            "phone": "07891234567",
            "email": "alex.j@example.com",
            "department": "ece",
            "year": "2",
            "events": [
              "hackathon",
              "cad-contest"
            ],
            "createdAt": "2025-04-29T18:20:10.542Z",
            "updatedAt": "2025-04-29T18:20:10.542Z",
            "__v": 0
          },
          {
            "_id": "681136d9b450c3dda599033f",
            "name": "Priya Sharma",
            "phone": "09876543210",
            "email": "priya.s@example.com",
            "department": "cse",
            "year": "4",
            "events": [
              "code-sprint",
              "robo-wars"
            ],
            "createdAt": "2025-04-28T14:15:22.542Z",
            "updatedAt": "2025-04-28T14:15:22.542Z",
            "__v": 0
          },
          {
            "_id": "681136d9b450c3dda599033g",
            "name": "Ravi Kumar",
            "phone": "08765432109",
            "email": "ravi.k@example.com",
            "department": "ece",
            "year": "3",
            "events": [
              "robo-wars",
              "hackathon"
            ],
            "createdAt": "2025-04-28T10:12:15.542Z",
            "updatedAt": "2025-04-28T10:12:15.542Z",
            "__v": 0
          },
          {
            "_id": "681136d9b450c3dda599033h",
            "name": "Mira Patel",
            "phone": "09876123450",
            "email": "mira.p@example.com",
            "department": "cse",
            "year": "2",
            "events": [
              "code-sprint",
              "cad-contest"
            ],
            "createdAt": "2025-04-27T15:40:30.542Z",
            "updatedAt": "2025-04-27T15:40:30.542Z",
            "__v": 0
          }
        ]
      };
      setEntries(mockData.entries);
      setFilteredEntries(mockData.entries);
    } finally {
      setLoading(false);
    }
  };
  
  useEffect(() => {
    fetchData();
  }, []);
  
  // Apply filters whenever search term or filters change
  useEffect(() => {
    let result = [...entries];
    
    // Apply search by name
    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase();
      result = result.filter(entry => 
        entry.name.toLowerCase().includes(searchLower)
      );
    }
    
    // Apply department filter
    if (departmentFilter) {
      result = result.filter(entry => 
        entry.department === departmentFilter
      );
    }
    
    // Apply year filter
    if (yearFilter) {
      result = result.filter(entry => 
        entry.year === yearFilter
      );
    }
    
    setFilteredEntries(result);
  }, [searchTerm, departmentFilter, yearFilter, entries]);
  
  // Get unique departments and years for filters
  const departments = [...new Set(entries.map(entry => entry.department))];
  const years = [...new Set(entries.map(entry => entry.year))];
  
  const resetFilters = () => {
    setSearchTerm('');
    setDepartmentFilter('');
    setYearFilter('');
  };
  
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
  };
  
  const handleViewDetails = (entry: Entry) => {
    setSelectedEntry(entry);
  };
  
  const handleCloseModal = () => {
    setSelectedEntry(null);
  };
  
  return (
    <div className="min-h-screen bg-gray-900 text-white font-mono p-4">
      <header className="flex justify-between items-center mb-6 border-b-2 border-teal-500 pb-4">
        <div className="flex items-center">
          <div className="mr-4 flex">
            <TetrisBlock color="bg-cyan-500" />
            <TetrisBlock color="bg-cyan-500" />
            <TetrisBlock color="bg-cyan-500" />
          </div>
          <h1 className="text-3xl font-bold text-teal-400">TETRIS ADMIN</h1>
        </div>
        <div className="flex gap-4">
          <button
            onClick={fetchData}
            className="py-1 px-3 bg-blue-600 hover:bg-blue-700 text-white border-b-2 border-blue-800 active:border-b-0 active:mt-0.5"
          >
            REFRESH
          </button>
          <button
            onClick={() => window.location.reload()}
            className="py-1 px-3 bg-red-600 hover:bg-red-700 text-white border-b-2 border-red-800 active:border-b-0 active:mt-0.5"
          >
            LOGOUT
          </button>
        </div>
      </header>
      
      <main>
        <TetrisBorder>
          <div className="mb-6">
            <h2 className="text-xl text-teal-400 mb-4">REGISTRATION ENTRIES</h2>
            
            {/* Search and Filter Section */}
            <div className="bg-gray-800 p-4 mb-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div>
                <label className="block text-teal-400 mb-1 text-sm">Search by Name</label>
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Enter name..."
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 text-white font-mono focus:border-teal-400 focus:outline-none text-sm"
                />
              </div>
              
              <div>
                <label className="block text-teal-400 mb-1 text-sm">Department</label>
                <select
                  value={departmentFilter}
                  onChange={(e) => setDepartmentFilter(e.target.value)}
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 text-white font-mono focus:border-teal-400 focus:outline-none text-sm uppercase"
                >
                  <option value="">All Departments</option>
                  {departments.map(dept => (
                    <option key={dept} value={dept} className="uppercase">{dept}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-teal-400 mb-1 text-sm">Year</label>
                <select
                  value={yearFilter}
                  onChange={(e) => setYearFilter(e.target.value)}
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 text-white font-mono focus:border-teal-400 focus:outline-none text-sm"
                >
                  <option value="">All Years</option>
                  {years.map(year => (
                    <option key={year} value={year}>{year}</option>
                  ))}
                </select>
              </div>
              
              <div className="flex items-end">
                <button
                  onClick={resetFilters}
                  className="w-full py-2 px-3 bg-gray-600 hover:bg-gray-500 text-white border-b-2 border-gray-800 active:border-b-0 active:mt-0.5 text-sm"
                >
                  RESET FILTERS
                </button>
              </div>
            </div>
            
            {/* Results Count */}
            <div className="text-right text-gray-400 mb-2 text-sm">
              Showing {filteredEntries.length} of {entries.length} entries
            </div>
          
          {loading ? (
            <div className="text-center p-6">
              <div className="animate-pulse flex justify-center mb-2">
                <TetrisBlock color="bg-blue-500" />
                <TetrisBlock color="bg-red-500" />
                <TetrisBlock color="bg-green-500" />
              </div>
              <p>Loading entries...</p>
            </div>
          ) : error ? (
            <div className="text-red-500 bg-gray-800 p-4 text-center">{error}</div>
          ) : filteredEntries.length === 0 ? (
            <div className="text-center p-6 bg-gray-800">
              <p>No matching entries found.</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-gray-700 bg-gray-800">
                    <th className="px-4 py-2 text-left text-teal-400">Name</th>
                    <th className="px-4 py-2 text-left text-teal-400">Email</th>
                    <th className="px-4 py-2 text-left text-teal-400">Department</th>
                    <th className="px-4 py-2 text-left text-teal-400">Year</th>
                    <th className="px-4 py-2 text-left text-teal-400">Events</th>
                    <th className="px-4 py-2 text-left text-teal-400">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredEntries.map((entry) => (
                    <tr key={entry._id} className="border-b border-gray-700 hover:bg-gray-800">
                      <td className="px-4 py-3">{entry.name}</td>
                      <td className="px-4 py-3">{entry.email}</td>
                      <td className="px-4 py-3 uppercase">{entry.department}</td>
                      <td className="px-4 py-3">{entry.year}</td>
                      <td className="px-4 py-3">
                        <div className="flex flex-wrap gap-1">
                          {entry.events.map((event, idx) => (
                            <span key={idx} className="text-xs bg-blue-900 px-2 py-0.5 rounded">
                              {event}
                            </span>
                          ))}
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        <button
                          onClick={() => handleViewDetails(entry)}
                          className="bg-teal-700 hover:bg-teal-600 px-2 py-1 text-xs"
                        >
                          VIEW
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          </div>
        </TetrisBorder>
      </main>
      
      {selectedEntry && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4">
          <div className="w-full max-w-md">
            <TetrisBorder>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl text-teal-400">PARTICIPANT DETAILS</h3>
                <button
                  onClick={handleCloseModal}
                  className="text-gray-400 hover:text-white"
                >
                  ×
                </button>
              </div>
              
              <div className="space-y-4 bg-gray-800 p-4">
                <div className="flex">
                  <span className="w-1/3 text-teal-400">Name:</span>
                  <span>{selectedEntry.name}</span>
                </div>
                <div className="flex">
                  <span className="w-1/3 text-teal-400">Email:</span>
                  <span>{selectedEntry.email}</span>
                </div>
                <div className="flex">
                  <span className="w-1/3 text-teal-400">Phone:</span>
                  <span>{selectedEntry.phone}</span>
                </div>
                <div className="flex">
                  <span className="w-1/3 text-teal-400">Department:</span>
                  <span className="uppercase">{selectedEntry.department}</span>
                </div>
                <div className="flex">
                  <span className="w-1/3 text-teal-400">Year:</span>
                  <span>{selectedEntry.year}</span>
                </div>
                <div className="flex">
                  <span className="w-1/3 text-teal-400">Events:</span>
                  <div className="flex flex-wrap gap-1">
                    {selectedEntry.events.map((event, idx) => (
                      <span key={idx} className="text-xs bg-blue-900 px-2 py-0.5 rounded">
                        {event}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex">
                  <span className="w-1/3 text-teal-400">Registered:</span>
                  <span>{formatDate(selectedEntry.createdAt)}</span>
                </div>
              </div>
              
              <div className="mt-4 flex justify-end">
                <button
                  onClick={handleCloseModal}
                  className="py-1 px-3 bg-gray-700 hover:bg-gray-600 text-white"
                >
                  CLOSE
                </button>
              </div>
            </TetrisBorder>
          </div>
        </div>
      )}
    </div>
  );
};

const Admin = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  return (
    <div className="min-h-screen bg-gray-900">
      {isLoggedIn ? (
        <Dashboard />
      ) : (
        <LoginScreen onLogin={() => setIsLoggedIn(true)} />
      )}
    </div>
  );
};

export default Admin;