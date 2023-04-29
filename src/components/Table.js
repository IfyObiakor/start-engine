import React from "react";

function Table() {
  return (
    <div>
      <table className="financial-table">
        <tr>
          <th></th>
          <th>Most Recent <br></br> Fiscal Year-End</th>
          <th>Prior Fiscal <br></br> Year-End</th>
        </tr>
        <tr>
          <th>Total Assets</th>
          <td>US$1,587,997</td>
          <td>US$853,320</td>
        </tr>
        <tr>
          <th>Cash & Cash Equivalents</th>
          <td>US$1,213,731</td>
          <td>US$718,334</td>
        </tr>
        <tr>
          <th>Accounts Receivable</th>
          <td>US$0</td>
          <td>US$0</td>
        </tr>
        <tr>
          <th>Short-Term Debt</th>
          <td>US$434,774</td>
          <td>US$251,432</td>
        </tr>

        <tr>
          <th>Long-Term Debt</th>
          <td>US$43,623</td>
          <td>US$0</td>
        </tr>

        <tr>
          <th>Revenue & Sales</th>
          <td>US$134,898</td>
          <td>US$161,696</td>
        </tr>

        <tr>
          <th>Revenue & Sales</th>
          <td>US$134,898</td>
          <td>US$161,696</td>
        </tr>

        <tr>
          <th>Taxes Paid</th>
          <td>US$797</td>
          <td>US$0</td>
        </tr>
  
        <tr>
          <th>Net Income</th>
          <td>-US$2,919,450</td>
          <td>-US$2,038,677</td>
        </tr>
      </table>
    </div>
  );
}

export default Table;
