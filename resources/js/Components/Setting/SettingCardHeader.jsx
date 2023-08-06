import React from "react"
import dayjs from "dayjs";


const SettingCardHeader = ({cardItem}) => {


    return(<div className="flex gap-4">
        {/* label */}
        <div className="flex-1">
            <div className="label">ラベル</div>
            <div>{cardItem.label_name}</div>
        </div>
        {/* num of use */}
        <div className="w-40">
            <div className="label">使用回数</div>
            <div>{cardItem.num_of_use > 0 
                ? <span>{cardItem.num_of_use}回</span>
                : <span className="pl-4"> - </span>}
            </div>
        </div>
        {/* create */}
        <div className="w-40">
            <div className="label">作成日</div>
            <div>{dayjs(cardItem.created_at).format("YYYY/MM/DD")}</div>
        </div>
        {/* update */}
        <div className="w-40">
            <div className="label">作成日</div>
            <div>
                {!cardItem.updated_at
                    ? <span className="pl-4"> - </span> 
                    : dayjs(cardItem.updated_at).format("YYYY/MM/DD")}
            </div>
        </div>
    </div>)
}

export default SettingCardHeader