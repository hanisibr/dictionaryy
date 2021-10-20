import Suhaila from "../PNGs/suhaila.png";
import Myra from "../PNGs/myra.png";
import Harvin from "../PNGs/harvin.png";
import Ben from "../PNGs/ben.png";
import Tasha from "../PNGs/tasha.png";
import Rusy from "../PNGs/rusy.png";
import Hanis from "../PNGs/hanis.png";
import "./ContributorList.css";

const ContributorList = () => {
  return (
    <div className="person_list">
      <div className="person">
        <div>
          <img src={Myra} className="person_img" alt="Myra" />
        </div>
        <div className="person_name">Myra</div>
      </div>
      <div className="person">
        <div>
          <img src={Rusy} className="person_img" alt="Rusy" />
        </div>
        <div className="person_name">Rusy</div>
      </div>
      <div className="person">
        <div>
          <img src={Suhaila} className="person_img" alt="Suhaila" />
        </div>
        <div className="person_name">Suhaila</div>
      </div>
      <div className="person">
        <div>
          <img src={Harvin} className="person_img" alt="Harvin" />
        </div>
        <div className="person_name">Harvin</div>
      </div>
      <div className="person">
        <div>
          <img src={Ben} className="person_img" alt="Ben" />
        </div>
        <div className="person_name">Ben</div>
      </div>
      <div className="person">
        <div>
          <img src={Tasha} className="person_img" alt="Tasha" />
        </div>
        <div className="person_name">Tasha</div>
      </div>
      <div className="person">
        <div>
          <img src={Hanis} className="person_img" alt="Hanis" />
        </div>
        <div className="person_name">Hanis</div>
      </div>
    </div>
  );
};

export default ContributorList;
