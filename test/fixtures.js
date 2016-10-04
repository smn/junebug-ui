module.exports = {
    CHANNEL_FIXTURE: {
      "status": {
        "status": null,
        "inbound_message_rate": 0,
        "submitted_event_rate": 0,
        "delivery_failed_rate": 0,
        "components": {},
        "rejected_event_rate": 0,
        "outbound_message_rate": 0,
        "delivery_pending_rate": 0,
        "delivery_succeeded_rate": 0
      },
      "type": "vumigo",
      "label": "Channel Label",
      "amqp_queue": "channel_queue",
      "config": {
        "web_port": 9007,
        "access_token": "XXX",
        "web_path": "/api-path",
        "base_url": "https://www.example.com/",
        "account_key": "XXX",
        "redis_manager": {
          "host": "redis-host",
          "db": 1,
          "port": 6379
        },
        "conversation_key": "XXXX"
      },
      "id": "00000000-0000-0000-0000-000000000000"
    }
}
