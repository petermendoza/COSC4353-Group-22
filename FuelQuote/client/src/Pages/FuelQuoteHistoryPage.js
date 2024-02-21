import FuelQuoteHistory from "../Components/FuelQuoteHistory";
import '../Style/Pages/FuelQuoteHistoryPage.css';

const FuelQuoteHistoryPage = () => {
    return (
        <div>
            <p className = "title" >History</p>
            <FuelQuoteHistory />
        </div>
    );
};

export default FuelQuoteHistoryPage;