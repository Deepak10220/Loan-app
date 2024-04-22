import { useState,useEffect } from "react";
import React from "react";
import Navbar from "../Component/Navbar";
import SliderWithInfo from "../Component/SliderWithInfo";
import Dropdown from "../Component/Dropdown";
import Piechart from "../Component/Piechart";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";

const Home = () => {
  const [tenure, setTenure] = useState(5);
  const [homevalue, setHomeValue] = useState(1700);  
  const [downPaymentValue, setDownPaymentValue] = useState(180);  
  const [loanAmountValue, setLoanAmountValue] = useState(1520);  
  const [interestValue, setInterestValue] = useState(2);
  const [monthlyInterest, setMonthlyInterest] = useState();

  const [chartData, setChartData] = useState({
    labels: ["Principal", "Interest"], 
    datasets: [
      {
        label: "Monthly Payment",
        data: [homevalue, 230],
        backgroundColor: [
          "#F00F00",
          "#FCFCFC",  
        ],
        borderColor: "black",
        borderWidth: 2
      }
    ]
  })

  useEffect(()=>{
    // Update the downPaymentValue : 20% of current homevalue
    const downPayment = homevalue * 0.20
    setDownPaymentValue(downPayment)

    // Update the loanAmountValue : homevalue - downPaymentValue
    const loanAmount = homevalue - downPaymentValue
    setLoanAmountValue(loanAmount)
  },[homevalue])


  useEffect(()=>{
    const r = interestValue/12;
    const n = tenure * 12;
    const EMI = (loanAmountValue * r * (1 + r)^n) / ((1 + r)^n - 1)
    setMonthlyInterest(EMI)
  },[loanAmountValue, interestValue, tenure])

  
  return (
    <div>
      <Navbar />
      <div style={{ display: "flex" }}>
        <div style={{ width: "50%", padding: "0px 10px" }}>
          <SliderWithInfo
            title={"Home Value"}
            symbol={"$"}
            min={1000}
            max={10000}
            
            setValue={setHomeValue} value={homevalue}
          />
          <SliderWithInfo
            title={"Down Payment"}
            symbol={"$"}
            min={0}
            max={homevalue}
            setValue={setDownPaymentValue} value={downPaymentValue}
            
          />
          <SliderWithInfo
            title={"Loan Amount"}
            symbol={"$"}
            setValue={setLoanAmountValue} value={loanAmountValue} min={0} max={homevalue}
            
          />
          <SliderWithInfo
            title={"Interest Rate"}
            symbol={"%"}
            min={2}
            max={18}
            setValue={setInterestValue} value={interestValue}
            
          />
          <div style={{ paddingTop: "40px" }}>
            <Dropdown setValue={setTenure} value={tenure} />
          </div>
        </div>

        <div style={{ width: "50%" }}>
           <Piechart chartData={chartData}/>
        </div>
      </div>

    </div>
  );
};

export default Home;
