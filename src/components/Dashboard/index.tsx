import { Contaniner } from "./styles";
import { Summary } from "../Summary";
import { TransactionsTable } from "../TransactionsTable";


export function Dashboard() {
    return (
        <Contaniner>
            <Summary />
            <TransactionsTable />
        </Contaniner>
    )
}