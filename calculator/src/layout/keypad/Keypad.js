import classes from "./keypad.module.css";
import Button from '../../components/Button';
function Keypad(props) {
  
  const rows = [
    { row: ["%", "CE", "C", "Back"], id: "1" },
    { row: ["1/x", "x^2", "x^1/2", "/"], id: "2" },
    { row: ["7", "8", "9", "*"], id: "3" },
    { row: ["4", "5", "6", "-"], id: "4" },
    { row: ["1", "2", "3", "+"], id: "5" },
    { row: ["+/-", "0", ".", "="], id: "6" },
  ];

  return (
    <div className={classes.keypad}>
      {rows.map((row) => {
     
        return (
          <div className={classes.row} key={row.id} >
            {row.row.map((simbol) => {
              return <Button  key={simbol} className={classes.btn}>{simbol}</Button>;
            })}
          </div>
        );
      })}
    </div>
  );
}

export default Keypad;
