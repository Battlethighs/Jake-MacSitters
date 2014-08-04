#config.ru
require 'sinatra'

require './app.rb'
set :root, Pathname(__FILE__).dirname
set :environment, :production
set :run, false
run Sinatra::Application
