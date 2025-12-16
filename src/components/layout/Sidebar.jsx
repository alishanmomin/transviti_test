import { LOCAL_IMAGES } from "../../utils/localImages.js";
import Card from "../ui/Card.jsx";

function StatRow({ label, value }) {
  return (
    <div className="flex items-center justify-between py-2 text-sm">
      <span className="text-slate-600">{label}</span>
      <span className="font-semibold text-primary">{value}</span>
    </div>
  );
}

export default function Sidebar() {
  return (
    <div className="space-y-3">
      <Card className="p-0 overflow-hidden">
        <div className="h-24">
          <img className="w-full h-full object-cover" src={LOCAL_IMAGES.headerImg}/>
        </div>
        <div className="px-5 pb-5 -mt-10">
          <div className="h-20 w-20 rounded-full m-auto bg-slate-300 border-2">
            <img src={LOCAL_IMAGES.dp}/>
          </div>
          <div className="mt-3 text-center">
            <div className="font-semibold">Ali Shan Momin</div>
            <div className="text-sm text-slate-500">
              Senior Product Designer | UI/UX
            </div>
            <div className="text-sm text-slate-500">
              Designer | Graphic Designer | Web...
            </div>
            <div className="text-sm text-slate-500 mt-1">Clinton, Maryland</div>
          </div>
        </div>
      </Card>

      <Card className="p-4">
        <StatRow label="Profile Visitors" value="140" />
        <div className="h-px bg-slate-100" />
        <StatRow label="Resume Viewers" value="20" />
        <div className="h-px bg-slate-100" />
        <StatRow label="My Jobs" value="88" />
      </Card>

      <Card className="p-4">
        <div className="flex items-center justify-between">
          <div>
            <div className="font-semibold">My calendar</div>
            <div className="text-sm text-slate-500">Upcoming Interviews</div>
          </div>
          <button className="text-slate-500 hover:text-slate-800"><img src={LOCAL_IMAGES.faDown} /></button>
        </div>
      </Card>
    </div>
  );
}
