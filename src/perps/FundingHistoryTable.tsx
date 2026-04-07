import '../ui/perps.css'
import { Badge } from '../ui'

export interface FundingRecord {
  id: string
  pair: string
  direction: 'long' | 'short'
  fundingFee: string
  fundingRate: string
  time: string
}

export interface FundingHistoryTableProps {
  records?: FundingRecord[]
}

const MOCK: FundingRecord[] = [
  {
    id: 'f1', pair: 'CAKE/USDT', direction: 'long',
    fundingFee: '-$0.18', fundingRate: '0.0052%', time: '2026-04-01 08:00',
  },
  {
    id: 'f2', pair: 'BTC/USDT', direction: 'short',
    fundingFee: '+$1.02', fundingRate: '-0.0031%', time: '2026-04-01 08:00',
  },
]

export function FundingHistoryTable({ records = MOCK }: FundingHistoryTableProps) {
  if (records.length === 0) {
    return <div className="p-empty">No funding history</div>
  }

  return (
    <table className="p-table">
      <thead>
        <tr>
          <th>Pair</th>
          <th>Funding Fee</th>
          <th>Funding Rate</th>
          <th>Time</th>
        </tr>
      </thead>
      <tbody>
        {records.map((f) => (
          <tr key={f.id}>
            <td>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <span className="p-value-sm">{f.pair}</span>
                <Badge variant={f.direction}>{f.direction.toUpperCase()}</Badge>
              </div>
            </td>
            <td>
              <p className={`p-value-sm ${f.fundingFee.startsWith('+') ? 'p-pnl-pos' : 'p-pnl-neg'}`}>
                {f.fundingFee}
              </p>
            </td>
            <td><p className="p-value-sm">{f.fundingRate}</p></td>
            <td><p className="p-label">{f.time}</p></td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
