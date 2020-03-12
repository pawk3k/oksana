# import-data

> Genuinely async import() of a data producing module, even in Node.

`import-data` gives Node.JS an asynchronous means to load and execute a module, and retrieve the output from that execution. It's meant as a data-centric, limited work-around to:

> Node.js still does not have a non-blocking require().
https://mobile.twitter.com/rektide/status/1114541061790154752

Under the hood, `import-data` uses either greenlet or microjob to run.
