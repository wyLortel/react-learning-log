export default function Cal() {
  return (
    <>
      <div className="bg-[#1f1f1f] flex justify-center item-center h-screen ">
        <article className="w-[282px] border border-[#333] bg-[#ccc] p-1">
          <form name="forms">
            <input type="text" name="output" readOnly />
            <input type="button" className="clear" value="C" />
            <input type="button" className="operator" value="/" />
            <input type="button" value="1" />
            <input type="button" value="2" />
            <input type="button" value="3" />
            <input type="button" className="operator" value="*" />
            <input type="button" value="4" />
            <input type="button" value="5" />
            <input type="button" value="6" />
            <input type="button" className="operator" value="+" />
            <input type="button" value="7" />
            <input type="button" value="8" />
            <input type="button" value="9" />
            <input type="button" className="operator" value="-" />
            <input type="button" className="dot" value="." />
            <input type="button" value="0" />
            <input type="button" className="operator result" value="=" />
          </form>
        </article>
      </div>
    </>
  );
}
