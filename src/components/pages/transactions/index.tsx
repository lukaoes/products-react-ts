import axios from "axios"
import { useEffect, useState } from "react"
import { TransactionLayout } from "./transactions.styled";

interface TransactionItem {
    category: string;
    credit: number | null;
    debit: number | null;
    description: string;
    id: number;
    transactionDate: string;
}

const Transactions = () => {

    const [transactions, setTransactions] = useState<TransactionItem[]>([])

    useEffect(() => {
        axios.get('https://api.sampleapis.com/fakebank/accounts').then((res) => {
            setTransactions(res.data)
        })
    }, [])

    setTimeout(() => {
        console.log(transactions)
    }, 1000)

    return (
        <TransactionLayout>
            <div className="row">
                <h1>#</h1>
                <h1>CATEGORY</h1>
                <h1>CREDIT CARD</h1>
                <h1>DEBIT CARD</h1>
                <h1>ITEM BOUGHT</h1>
                <h1>TRANSACTION DATE</h1>

            </div>
            <div className="margin0auto">
                {transactions.map((item, index) => (
                    <div className="row" key={index}>
                        <p>
                            {item.id}
                        </p>
                        <p>
                            {item.category}
                        </p>
                        <p>
                            {item.credit ? `$${item.credit}` : <span>&#10060;</span>}
                        </p>
                        <p>
                            {item.debit ? `$${item.debit}` : <span>&#10060;</span>}
                        </p>
                        <p>
                            {item.description}
                        </p>
                        <p>
                            {item.transactionDate}
                        </p>
                    </div>
                ))}
            </div>
        </TransactionLayout>
    )
}

export default Transactions