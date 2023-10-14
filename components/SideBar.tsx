import NewChat from "./NewChat";

 export function SideBar(){
    return(
        <div className="p-2 flex flex-col h-screen">
            <div className="flex-1">
                <div>
                <NewChat/>
                {/* <div>modelselection</div> */}
                </div>
            </div>
        </div>
    )
}