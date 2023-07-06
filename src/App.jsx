
import './Test.css'


function App() {
  return (
    <div className="container">
      <div className="card">
        <div className="card--header" />
        <img
          className="avatar"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_ums6Rp3LJDJZ4ClL81ZAa1x7Jos8YVCdKg&usqp=CAU"
          alt="avatar"
        />
        <div className="card--body">
          <div>
            <p className="text-header">Văn Hùng</p>
            <p className="text-sub">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry
            </p>
            <button className="btn third">FOLLOW</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
