import { start, job, stop } from "microjob"

export {
  start,
  stop
}

export async function ImportDataNode({ module, exportName, args, arg, doStart= true, doStop}){
	args= args|| (arg!== undefined&& [ arg]|| undefined)
	if( doStart){
		await start()
	}

	const res= job( data=> {
		const { module, exportName, args}= data
		let cursor= require( module)
		if( exportName){
			cursor= cursor[ exportName]
		}
		if( args){
			cursor= cursor.apply(undefined, args)
		}
		return cursor
	  }, { data: {
		module,
		exportName,
		args
	  }})
	//const res= job(()=> { return 42 })
	if( doStop){
		res.finally(() => stop())
	}
	return res
}
export {
	ImportDataNode as importDataNode,
	ImportDataNode as ImportData,
	ImportDataNode as importData,
	ImportDataNode as Node,
	ImportDataNode as node
}
export default ImportDataNode
