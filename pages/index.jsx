import axios from "axios";
import { useEffect, useState } from "react";

import PanelList from "../components/PanelList";
import PanelDetails from "../components/PanelDetails";
import Backdrop from "../components/shared/Backdrop";

export default function Home() {
  const [panelList, setPanelList] = useState(null);
  const [selectedPanel, setSelectedPanel] = useState(null);
  useEffect(() => {
    axios
      .get(`${window.location.href}api/panels`)
      .then(({ data }) => {
        setPanelList(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <PanelList
        panelList={panelList}
        selectedPanel={selectedPanel}
        setSelectedPanel={setSelectedPanel}
      />
      <PanelDetails
        panelList={panelList}
        selectedPanel={selectedPanel}
        setSelectedPanel={setSelectedPanel}
      />
      <Backdrop
        selectedPanel={selectedPanel}
        setSelectedPanel={setSelectedPanel}
      />
    </>
  );
}
