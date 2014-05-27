MojioClient = require '../lib/MojioClient'
Mojio = require '../src/models/Mojio'
config = require './config/mojio-config.coffee'
mojio_client = new MojioClient(config)
assert = require('assert')
testdata = require('./data/mojio-test-data')
should = require('should')
describe 'Mojio', ->
    it 'can get Mojio', (done) ->
        mojio_client.login(testdata.username, testdata.password, (error, result) ->
            (error==null).should.be.true
            mojio_client.mojios((error, result) ->
                (error==null).should.be.true
                mojio_client.should.be.an.instanceOf(MojioClient)
                if (result.Data instanceof Array)
                    mojio = new Mojio(result.Data[0])
                else if (result.Data?)
                    mojio = new Mojio(result.Data)
                else
                    mojio = new Mojio(result)
                mojio.should.be.an.instanceOf(Mojio)
                done()
            )
        )