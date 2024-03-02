<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Swoole\Server;

class TcpServer extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:tcp-server';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $server = new Server('127.0.0.1', 9501, SWOOLE_PROCESS, SWOOLE_SOCK_TCP);

        $server->on('connect', function ($server, $fd) {
            $this->info("Client connected: #{$fd}");
        });

        $server->on('receive', function ($server, $fd, $reactor_id, $data) {
            $this->info("Received data from client #{$fd}: {$data}");
            $server->send($fd, "Hello, Client #{$fd}!\n");
        });

        $server->on('close', function ($server, $fd) {
            $this->info("Client #{$fd} closed");
        });

        $this->info('TCP Server started on 127.0.0.1:9501');
        $server->start();
    }
}
