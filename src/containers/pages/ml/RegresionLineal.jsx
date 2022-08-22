import { connect } from "react-redux";
import FullWidthLayout from "hocs/layouts/FullWidthLayout";
import { useEffect } from "react";
import { get_lineal_regression } from "redux/actions/ml";

import {
    Chart as ChartJS,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend,
} from "chart.js";
import { Scatter } from "react-chartjs-2";

ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend);


function RegresionLineal({ get_lineal_regression, lineal_regression }) {

    useEffect(() => {
        const fetchData = async () => {
            lineal_regression ? <></>:get_lineal_regression();
        };
        fetchData();
    }, []);

    

    const options = {
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };
    

    const data = {
        datasets: [
            {
                label: "A dataset",
                data:null,
                backgroundColor: "rgba(255, 99, 132, 1)",
            },
        ],
    };

    return (
        <FullWidthLayout>
            <Scatter options={options} data={data} />
        </FullWidthLayout>
    );
}

const mapStateToProps = (state) => ({
    lineal_regression: state.ml.lineal_regression,
});

export default connect(mapStateToProps, {
    get_lineal_regression,
})(RegresionLineal);