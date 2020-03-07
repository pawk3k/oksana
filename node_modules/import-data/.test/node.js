import tape from "tape"
import { join} from "path"

import importData from "../node.js"

export function tests(){
	testBasic()
}
export default tests

export async function testBasic(){
	tape( "can import a module", async function( t){
		t.plan( 1)
		const
		  module= join( __dirname, "fixture", "basic.js"),
		  computed= await importData({ module, doStop: true})
		t.deepEqual( computed,{ hello: "world", value: 54, base: 13})
	})
}
