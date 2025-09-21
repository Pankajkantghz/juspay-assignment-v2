import { useState, useMemo, useEffect } from "react"

// === inline svg icons ===
const CalendarIcon = (props) => (
  <svg {...props} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
    <line x1="16" y1="2" x2="16" y2="6"/>
    <line x1="8" y1="2" x2="8" y2="6"/>
    <line x1="3" y1="10" x2="21" y2="10"/>
  </svg>
)

const SearchIcon = (props) => (
  <svg {...props} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <circle cx="11" cy="11" r="8"/>
    <line x1="21" y1="21" x2="16.65" y2="16.65"/>
  </svg>
)

const DotsVertical = (props) => (
  <svg {...props} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <circle cx="12" cy="5" r="1"/>
    <circle cx="12" cy="12" r="1"/>
    <circle cx="12" cy="19" r="1"/>
  </svg>
)

// === Status colors ===
const statusColors = {
  "In Progress": "#6366F1",
  "Complete": "#10B981",
  "Pending": "#0EA5E9",
  "Approved": "#F59E0B",
  "Rejected": "#9CA3AF",
}

// === Seed Data ===
const seed = [
  ["#CM9801","Natali Craig","Landing Page","Meadow Lane Oakland","Just now","In Progress"],
  ["#CM9802","Kate Morrison","CRM Admin","Larry San Francisco","A minute ago","Complete"],
  ["#CM9803","Drew Cano","Client Project","Bagwell Avenue Ocala","1 hour ago","Pending"],
  ["#CM9804","Orlando Diggs","Dashboard","Washburn Baton Rouge","Yesterday","Approved"],
  ["#CM9805","Andi Lane","App Landing","Nest Lane Olivette","Feb 2, 2023","Rejected"],
]

const rows = Array.from({length:2}).flatMap((_,i)=>
  seed.map(([id,u,p,a,d,s],idx)=>({
    id: id+i,
    user:{name:u, avatar:`https://i.pravatar.cc/40?u=${i}${idx}`},
    project:p, address:a, date:d, status:s
  }))
)

export default function OrderList() {
  const [query,setQuery]=useState("")
  const [page,setPage]=useState(1)
  const [data,setData]=useState(rows)
  const perPage=8

  // Filtering
  const filtered=useMemo(()=>{
    if(!query.trim()) return data
    const q=query.toLowerCase()
    return data.filter(r =>
      `${r.id} ${r.user.name} ${r.project} ${r.address} ${r.date} ${r.status}`.toLowerCase().includes(q)
    )
  },[query,data])

  // Pagination logic
  const totalPages=Math.max(1,Math.ceil(filtered.length/perPage))
  useEffect(()=>setPage(1),[query])
  const pageRows=useMemo(()=>filtered.slice((page-1)*perPage,page*perPage),[filtered,page,perPage])

  const updateStatus=(id,newStatus)=>{
    setData(prev=>prev.map(r=>r.id===id?{...r,status:newStatus}:r))
  }

  return (
    <div 
      className="flex flex-col bg-white shadow rounded border border-gray-200"
      style={{width:"1172px", gap:"12px"}}
    >
      {/* === Toolbar === */}
      <div className="flex items-center justify-between bg-[#F7F9FB] px-3 rounded-t" style={{height:"44px"}}>
        <div className="flex items-center gap-3">
          <button>＋</button>
          <button>≡</button>
          <button>⇅</button>
        </div>
        <div className="relative">
          <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400"/>
          <input
            value={query}
            onChange={(e)=>setQuery(e.target.value)}
            placeholder="Search"
            className="w-48 h-8 pl-8 pr-3 rounded border border-gray-300 text-sm"
          />
        </div>
      </div>

      {/* === Table (Flex Columns) === */}
      <div className="flex border-t" style={{width:"1172px", maxHeight:"440px", overflowY:"auto"}}>
        
        {/* Col: Checkbox */}
        <div className="flex flex-col w-[32px]">
          <div className="h-10 flex items-center justify-center border-b"><input type="checkbox"/></div>
          {pageRows.map(r=>(
            <div key={r.id} className="h-10 flex items-center justify-center border-b">
              <input type="checkbox"/>
            </div>
          ))}
        </div>

        {/* Col: Order ID */}
        <div className="flex flex-col w-[120px]">
          <div className="h-10 flex items-center border-b font-medium px-2">Order ID</div>
          {pageRows.map(r=>(<div key={r.id} className="h-10 flex items-center border-b px-2">{r.id}</div>))}
        </div>

        {/* Col: User */}
        <div className="flex flex-col w-[200px]">
          <div className="h-10 flex items-center border-b font-medium px-2">User</div>
          {pageRows.map(r=>(
            <div key={r.id} className="h-10 flex items-center gap-2 border-b px-2">
              <img src={r.user.avatar} alt="" className="h-7 w-7 rounded-full"/>
              {r.user.name}
            </div>
          ))}
        </div>

        {/* Col: Project */}
        <div className="flex flex-col flex-1">
          <div className="h-10 flex items-center border-b font-medium px-2">Project</div>
          {pageRows.map(r=>(<div key={r.id} className="h-10 flex items-center border-b px-2">{r.project}</div>))}
        </div>

        {/* Col: Address */}
        <div className="flex flex-col flex-1">
          <div className="h-10 flex items-center border-b font-medium px-2">Address</div>
          {pageRows.map(r=>(<div key={r.id} className="h-10 flex items-center border-b px-2">{r.address}</div>))}
        </div>

        {/* Col: Date */}
        <div className="flex flex-col w-[160px]">
          <div className="h-10 flex items-center border-b font-medium px-2">Date</div>
          {pageRows.map(r=>(
            <div key={r.id} className="h-10 flex items-center gap-1 border-b px-2 text-gray-600">
              <CalendarIcon className="h-4 w-4 text-gray-400"/>
              {r.date}
            </div>
          ))}
        </div>

        {/* Col: Status */}
        <div className="flex flex-col w-[150px]">
          <div className="h-10 flex items-center border-b font-medium px-2">Status</div>
          {pageRows.map(r=>(
            <div key={r.id} className="h-10 flex items-center border-b px-2">
              <select
                value={r.status}
                onChange={(e)=>updateStatus(r.id,e.target.value)}
                className="bg-transparent text-sm"
                style={{color:statusColors[r.status]}}
              >
                {Object.keys(statusColors).map(st=>(
                  <option key={st} value={st} style={{color:statusColors[st]}}>{st}</option>
                ))}
              </select>
            </div>
          ))}
        </div>

        {/* Col: Actions */}
        <div className="flex flex-col w-[50px]">
          <div className="h-10 border-b"></div>
          {pageRows.map(r=>(
            <div key={r.id} className="h-10 flex items-center border-b px-2 text-gray-500">
              <DotsVertical className="h-4 w-4"/>
            </div>
          ))}
        </div>
      </div>

     
      {/* === Pagination === */}
<div 
  className="flex items-center gap-2 rounded px-2 self-end"
  style={{width:"244px", height:"28px"}}
>
  <button disabled={page===1} onClick={()=>setPage(page-1)} className="px-1">{'<'}</button>
  {Array.from({length:totalPages}).map((_,i)=>{
    const p=i+1
    return (
      <button
        key={p}
        onClick={()=>setPage(p)}
        className={`h-7 w-7 rounded ${p===page ? "bg-gray-900 text-white" : "hover:bg-gray-100"}`}
      >
        {p}
      </button>
    )
  })}
  <button disabled={page===totalPages} onClick={()=>setPage(page+1)} className="px-1">{'>'}</button>
</div>
    </div>
  )
}