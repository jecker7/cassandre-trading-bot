package tech.cassandre.trading.bot.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import java.math.BigDecimal;

/**
 * Position (used to save data between restarts).
 */
@Entity
@Table(name = "POSITIONS")
public class Position {

    /** Precision. */
    private static final int PRECISION = 16;

    /** Scale. */
    private static final int SCALE = 8;

    /** An identifier that uniquely identifies the position. */
    @Id
    @Column(name = "ID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    /** Position . */
    @Column(name = "STATUS")
    private String status;

    /** Position rules - stop gain percentage. */
    @Column(name = "RULES_STOP_GAIN_PERCENTAGE")
    private Float stopGainPercentageRule;

    /** Position rules - stop loss percentage. */
    @Column(name = "RULES_STOP_LOSS_PERCENTAGE")
    private Float stopLossPercentageRule;

    /** The order id that opened the position. */
    @Column(name = "OPEN_ORDER_ID")
    private String openOrderId;

    /** The order id that closed the position. */
    @Column(name = "CLOSE_ORDER_ID")
    private String closeOrderId;

    /** The fee that was charged by the exchange for this trade. */
    @Column(name = "LOWEST_PRICE", precision = PRECISION, scale = SCALE)
    private BigDecimal lowestPrice;

    /** The fee that was charged by the exchange for this trade. */
    @Column(name = "HIGHEST_PRICE", precision = PRECISION, scale = SCALE)
    private BigDecimal highestPrice;

    /**
     * Getter id.
     *
     * @return id
     */
    public long getId() {
        return id;
    }

    /**
     * Setter id.
     *
     * @param newId the id to set
     */
    public void setId(final long newId) {
        id = newId;
    }

    /**
     * Getter status.
     *
     * @return status
     */
    public String getStatus() {
        return status;
    }

    /**
     * Setter status.
     *
     * @param newStatus the status to set
     */
    public void setStatus(final String newStatus) {
        status = newStatus;
    }

    /**
     * Getter rulesStopGainPercentage.
     *
     * @return rulesStopGainPercentage
     */
    public Float getStopGainPercentageRule() {
        return stopGainPercentageRule;
    }

    /**
     * Setter rulesStopGainPercentage.
     *
     * @param newRulesStopGainPercentage the rulesStopGainPercentage to set
     */
    public void setStopGainPercentageRule(final Float newRulesStopGainPercentage) {
        stopGainPercentageRule = newRulesStopGainPercentage;
    }

    /**
     * Getter rulesStopLossPercentage.
     *
     * @return rulesStopLossPercentage
     */
    public Float getStopLossPercentageRule() {
        return stopLossPercentageRule;
    }

    /**
     * Setter rulesStopLossPercentage.
     *
     * @param newRulesStopLossPercentage the rulesStopLossPercentage to set
     */
    public void setStopLossPercentageRule(final Float newRulesStopLossPercentage) {
        stopLossPercentageRule = newRulesStopLossPercentage;
    }

    /**
     * Getter openOrderId.
     *
     * @return openOrderId
     */
    public String getOpenOrderId() {
        return openOrderId;
    }

    /**
     * Setter openOrderId.
     *
     * @param newOpenOrderId the openOrderId to set
     */
    public void setOpenOrderId(final String newOpenOrderId) {
        openOrderId = newOpenOrderId;
    }

    /**
     * Getter closeOrderId.
     *
     * @return closeOrderId
     */
    public String getCloseOrderId() {
        return closeOrderId;
    }

    /**
     * Setter closeOrderId.
     *
     * @param newCloseOrderId the closeOrderId to set
     */
    public void setCloseOrderId(final String newCloseOrderId) {
        closeOrderId = newCloseOrderId;
    }

    /**
     * Getter lowestPrice.
     *
     * @return lowestPrice
     */
    public BigDecimal getLowestPrice() {
        return lowestPrice;
    }

    /**
     * Setter lowestPrice.
     *
     * @param newLowestPrice the lowestPrice to set
     */
    public void setLowestPrice(final BigDecimal newLowestPrice) {
        lowestPrice = newLowestPrice;
    }

    /**
     * Getter highestPrice.
     *
     * @return highestPrice
     */
    public BigDecimal getHighestPrice() {
        return highestPrice;
    }

    /**
     * Setter highestPrice.
     *
     * @param newHighestPrice the highestPrice to set
     */
    public void setHighestPrice(final BigDecimal newHighestPrice) {
        highestPrice = newHighestPrice;
    }

}
